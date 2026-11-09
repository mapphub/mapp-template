/** Example API action: MiniApps.example('ping', { n: 1 }) */
export default async function ping(ctx) {
  return { ok: true, echo: ctx.params ?? {}, at: Date.now() };
}
