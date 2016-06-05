$.fullCalendar.lang("pt-br", {
	buttonText: {
		month: "Mês",
		week: "Semana",
		day: "Dia",
		list: "Compromissos",
		timelineThreeDays: "3 dias",
		today: "Hoje"
	},
	allDayText: "dia inteiro",
	eventLimitText: function(n) {
		return "mais +" + n;
	},
	monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Augosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
	titleFormat: 'D/MMMM/YYYY'
});