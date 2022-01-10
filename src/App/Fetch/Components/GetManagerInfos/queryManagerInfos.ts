export function queryManagerInfos(managerSlug: string): string {

    const query = `{\n  user(slug: "${managerSlug}") {\n    slug\n    nickname\n    createdAt\n    profile {clubShield {pictureUrl}}\n    cardCounts {common, limited, rare, superRare, unique, total}\n  }\n}`

    return query
}