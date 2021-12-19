module.exports = {

    getDateTime() {
        var date = new Date()
        date.setHours(date.getHours() + 1)
        date = date.toISOString().slice(0, 19).replace('T', ' ');
        return date
   }
}