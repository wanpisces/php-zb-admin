export default {
    discountSelect: function () {
        let arr = []
        for (let i = 50; i <= 100; i += 5) {
            arr.push({ label: i + "%", value: i });
        }
        return arr
    }
}