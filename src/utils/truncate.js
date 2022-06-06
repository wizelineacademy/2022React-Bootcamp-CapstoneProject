const truncate = (toTruncate, maxLength) =>
	(toTruncate.length > maxLength ? `${toTruncate.substring(0, maxLength)}...` : toTruncate);

export default truncate;

