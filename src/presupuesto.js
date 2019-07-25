window.presupuesto = {
    expensesCalc : (expenses) => {
        // savings - current amount saved
        // expenses - estimated weekly expense
        // bootcamp duration = 25 weeks (6 months bootcam + 1 preadmission week)
        // cultura de pago ?

        return expenses*25;
    },

    balance : (savings, totalExpenses) => {
        return savings - totalExpenses;
    }
};