const formatNumber = (num) => num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export default formatNumber