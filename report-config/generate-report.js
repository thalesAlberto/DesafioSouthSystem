const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: './report-config/',
    reportPath: './relatorio/',
    pageTitle: 'Testes de API',
    reportName: 'Relatório de execução dos testes de API',
    customData: {
        title: 'Run info',
        data: [
            { label: 'Projeto', value: 'TestesAutomatizados' },
            { label: 'Versão', value: '1.0.0' },
            { label: 'Ambiente', value: 'Desenvolvimento' },
            { label: 'Executado em', value: Date() }
        ]
    }
});