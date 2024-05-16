export function coloredText(
    word: string,
    colors: string[] = ["text-purple", "text-blue-100", "text-green-200"]
): string[] {
    const coloredText = word.split("").map((letter, index) => {
        const color = colors[index % colors.length];

        return color;
    });
    return coloredText;
}
