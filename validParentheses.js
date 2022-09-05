let parens;

function validParentheses(parens) {
    if (parens.length >= 0 && parens.length <= 100) {
        let eachParenthese = parens.split("");
        let control = 0;
        for (let i = 0; i < eachParenthese.length; i++) {
            eachParenthese[i] == "(" ? control++ : control--;
            if (control < 0) break;
        }
        return control == 0 ? true : false;
    }
    return false;
}


export default validParentheses;