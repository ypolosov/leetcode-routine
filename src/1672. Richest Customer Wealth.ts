export function maximumWealth(accounts: number[][]): number {
  const result = accounts
    .map((account) => {
      return account.reduce((p, c) => {
        return p + c;
      }, 0);
    })
    .sort((a, b) => a - b)
    .pop() as number;
  return result;
}
