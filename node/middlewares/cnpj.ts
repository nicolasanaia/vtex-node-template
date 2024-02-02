import parser from 'co-body';

export async function cnpj(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalog, cnpj },
  } = ctx;

  const { skuId, cnpj: targetCnpj } = await parser(ctx.req);
  console.log(skuId, targetCnpj)

  const findCnpj = await cnpj.searchCnpj(targetCnpj);

  const findSku = await catalog.getSkuById(skuId);

  ctx.status = 200;
  ctx.body = {
    findCnpj,
    findSku
  };

  await next();
}
