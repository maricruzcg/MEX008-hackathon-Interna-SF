window.presupuesto = {
    budgetCalc : (savings, expenses) => {
        // savings - current amount saved
        // expenses - estimated weekly expense
        // bootcamp duration = 25 weeks (6 months bootcam + 1 preadmission week)
        // cultura de pago ?

        return savings - (expenses*25);
    },

    balance : (saldo) => {

    }
};