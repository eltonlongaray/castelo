-- === BLOCO 1: QUEM É ADMIN (Elton + Larissa) — vale pros painéis da seleção e de vendas ===
create table if not exists public.admins (email text primary key);
alter table public.admins enable row level security;
insert into public.admins (email) values ('elton.longaray483@gmail.com') on conflict do nothing;
-- pra liberar a Larissa, troque o e-mail abaixo pelo login do castelo dela e rode só esta linha:
-- insert into public.admins (email) values ('EMAIL-DA-LARISSA') on conflict do nothing;

create or replace function public.eh_admin() returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.admins where email = auth.jwt()->>'email') $$;
grant execute on function public.eh_admin() to authenticated;

-- === BLOCO 2: SELEÇÃO — leitura/edição pelos admins + colunas do pós-workshop ===
drop policy if exists "admin le" on public.selecao_aula;
create policy "admin le" on public.selecao_aula for select to authenticated using (public.eh_admin());
drop policy if exists "admin seleciona" on public.selecao_aula;
create policy "admin seleciona" on public.selecao_aula for update to authenticated
  using (public.eh_admin()) with check (public.eh_admin());
alter table public.selecao_aula add column if not exists compareceu boolean;
alter table public.selecao_aula add column if not exists status_venda text;
alter table public.selecao_aula add column if not exists followup jsonb not null default '{}'::jsonb;

-- === BLOCO 3: RESERVAS DE VAGA DA MENTORIA (página /mentoria/) ===
create table if not exists public.mentoria_vagas (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  nome text, whatsapp text, forma text,
  pago boolean not null default false,
  pago_em timestamptz,
  followup jsonb not null default '{}'::jsonb,
  obs text
);
alter table public.mentoria_vagas enable row level security;
drop policy if exists "qualquer pessoa reserva" on public.mentoria_vagas;
create policy "qualquer pessoa reserva" on public.mentoria_vagas for insert to anon, authenticated with check (pago = false);
drop policy if exists "admin le vagas" on public.mentoria_vagas;
create policy "admin le vagas" on public.mentoria_vagas for select to authenticated using (public.eh_admin());
drop policy if exists "admin atualiza vagas" on public.mentoria_vagas;
create policy "admin atualiza vagas" on public.mentoria_vagas for update to authenticated
  using (public.eh_admin()) with check (public.eh_admin());

-- === BLOCO 4: VAGAS RESTANTES (a página só vê o número de pagas, nunca os nomes) ===
create or replace function public.mentoria_pagas() returns integer
language sql stable security definer set search_path = public
as $$ select count(*)::int from public.mentoria_vagas where pago $$;
grant execute on function public.mentoria_pagas() to anon, authenticated;
