function calculateProfitOrLossSummary(balanceSheets) {
    const summary = {};
    for (const balanceSheet of balanceSheets) {
        for (const entry of balanceSheet) {
            const { year, profitOrLoss,  assetsValue } = entry;

            if (!summary[year]) {
                summary[year] = {};
                summary[year].profitOrLoss = profitOrLoss;
                summary[year].assetsValue = assetsValue;
            } else {
                summary[year].profitOrLoss += profitOrLoss;
                summary[year].assetsValue += assetsValue;
            }
        }
    }
    return summary;
}

function calculatePreAssessment(loanAmount, summary) {
    const currentYear = new Date().getFullYear();

    console.log(summary[currentYear - 1]);
    if (summary[currentYear - 1].profitOrLoss > 0) {
        const averageAssetValue = summary[currentYear - 1].assetsValue / 12;
        return averageAssetValue > loanAmount ? 100 : 60;
    } else {
        return 20;
    }
}


async function fetchLoanDecision(param) {
    const summary = calculateProfitOrLossSummary(param.balanceSheets);
    const data = {
        businessDetails: {
            firstNmae: param.firstNmae,
            userId: param.userId,
            establishedYear: param.establishedYear,
            accountProvider: param.accountProvider,
            loanAmount: param.loanAmount,
            summary,
        },
        preAssessment: calculatePreAssessment( param.loanAmount, summary )
    };

    console.log(data);
    try {
        const response = await fetch('http://localhost:5001/get-decision', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const resJson = await response.json();

        if (resJson) {
            return resJson;
        } else {
            console.log("Some thing went wrong.");
        }
    } catch (e) {
        console.log(e);
    }
}

export default fetchLoanDecision;
