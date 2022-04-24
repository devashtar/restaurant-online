declare module '*.png' {
    const value: string
    export default value
}

declare module '*.jpg' {
    const value: string
    export default value
}

declare module '*.jpeg' {
    const value: string
    export default value
}

declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const content: string
    export { ReactComponent }
    export default content
}

declare module '*.gif' {
    const value: string
    export default value
}
