import type { WriteTransaction } from "@rocicorp/reflect";

export const mutators = {
  increment,
};

async function increment(tx: WriteTransaction, delta: number) {
  const value = (await tx.get<number>("count")) ?? 0;
  await tx.set("count", value + delta);
}
