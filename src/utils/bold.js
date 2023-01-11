export const bold = (word,list) => {
    return list.map((data)=> {
        let regex = new RegExp(word, "gim");
        return data.sickNm.replace(regex, `<span style="font-weight:bolder">${word}</span>`)
    })
}