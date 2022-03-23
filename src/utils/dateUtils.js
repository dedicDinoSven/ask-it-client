class DateUtils {
    static parse(date) {
        return (new Date(date)).toLocaleDateString("en-US",{ year: 'numeric', month: 'short', day: 'numeric' });
    }
}

export default DateUtils;