const base = {
    small: 1,
    medium: 3,
    large: 6,
}

export const small = {
    int: base.small,
    px: base.small + 'px',
    prop: `border-radius: ${base.small}px;`,
}

export const medium = {
    int: base.medium,
    px: base.medium + 'px',
    prop: `border-radius: ${base.medium}px;`,
}

export const large = {
    int: base.large,
    px: base.large + 'px',
    prop: `border-radius: ${base.large}px;`,
}
