export const formatTitle = (title) => {
    if (title.length < 20) return title;

    return title.slice(0, 20).concat('...');
}