exports.dbTable = (url) => {
    console.log(url.indexOf('add-loan'))
    return url.indexOf('add-loan') ? 'offering_loans' : 'seeking_loans'
}