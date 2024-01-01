export const findContentChildren = (greedFactors: number[], cookieSizes: number[]): number => {
    const g = greedFactors.slice().sort((a, b) => a - b)
    const s = cookieSizes.slice().sort((a, b) => a - b)


    let i = 0;
    for (let j = 0; j < s.length && i < g.length; ++j) {
        if (g[i] <= s[j]) {
            ++i;
        }
    }

    return i
};