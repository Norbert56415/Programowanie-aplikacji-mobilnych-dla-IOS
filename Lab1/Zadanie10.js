const activities = [
  { type: "bieg", minutes: 35, calories: 320 },
  { type: "rower", minutes: 50, calories: 410 },
  { type: "spacer", minutes: 20, calories: 90 },
  { type: "siłownia", minutes: 60, calories: 450 }
];

const timeActivities = activities.reduce((sum, activities) => sum + activities.minutes, 0);
console.log(timeActivities);

const caloriesActivities = activities.reduce((sum, activities) => sum + activities.calories, 0);
console.log(caloriesActivities);

const moreThan30 = activities.filter(t => t.minutes >30);
console.log(moreThan30);

const maxCalories = activities.reduce((max, activity) => {
    return activity.calories > max.calories ? activity : max;
});
console.log(maxCalories);

console.log(`
czas wszytkich twoich aktywności wyniósł ${timeActivities} minut,
podczas treningów spaliłeś ${caloriesActivities} kalorii,
twój najbardziej efektywny trening to ${maxCalories.type} podczas którego spaliłeś aż ${maxCalories.calories} kalorii
`)
