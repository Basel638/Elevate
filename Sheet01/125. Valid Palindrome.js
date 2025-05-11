var isPalindrome = function(s) {
    let s1 = '';
    for (let i = 0; i < s.length; i++) {
        if (!/[a-zA-Z0-9]/.test(s[i])) continue;
        s1 += s[i].toLowerCase();
    }

    let reversed = '';
    for (let i = s1.length - 1; i >= 0; i--) {
        reversed += s1[i];
    }

    return reversed === s1;
};