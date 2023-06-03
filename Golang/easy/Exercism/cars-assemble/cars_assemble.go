package cars

const fullPercentage = 100
const minutesInHour = 60
const groupOfCars = 10
const materialPriceBulk = 95000
const materialPricePerCar = 10000

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * (successRate / fullPercentage)
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	return int(CalculateWorkingCarsPerHour(productionRate, successRate)) / minutesInHour
}

// CalculateCost works out the cost of producing the given number of cars
func CalculateCost(carsCount int) uint {
	numberOfCarGroups := carsCount / groupOfCars
	carsReminder := carsCount % groupOfCars

	return (uint(numberOfCarGroups) * materialPriceBulk) + (uint(carsReminder) * materialPricePerCar)
}
