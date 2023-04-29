export class Matrix {
	constructor(string) {
		this.matrix = string.split('\n')
	}
	get rows() {
		return this.matrix.map(row => row.split(' ').map(Number))
	}
	get columns() {
		return this.rows[0].map((el, i) => {
			return this.rows.map(row => row[i])
		})
	}
}
