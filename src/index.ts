const messages: string[] = ['Happy', 'Coding!'];

console.log(
    messages.reduce((message, curVal) => {
        return `${message}${curVal} `;
    }, ''),
);
