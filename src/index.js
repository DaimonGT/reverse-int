module.exports = function reverse(n) {
    if (n > 0) {
        n = n.toString();
        n = n.split('');
        n = n.reverse();
        n = n.join('');
        n = Number(n);
        return n;
    }
    if (n < 0) {
        n = n * (-1);
        n = n.toString();
        n = n.split('');
        n = n.reverse();
        n = n.join('');
        n = Number(n);
        return n;
    }
}
