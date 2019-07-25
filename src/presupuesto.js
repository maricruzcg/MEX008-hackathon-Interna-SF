window.presupuesto = {
    expensesCalc : (expenses) => {
        // expenses - estimated weekly expense
        // bootcamp duration = 25 weeks (6 months bootcam + 1 preadmission week)
        // cultura de pago 

        return expenses*25+(150*6);
    },

    balance : (savings, totalExpenses) => {
        // savings - current amount saved
        return savings - totalExpenses;
    }
};