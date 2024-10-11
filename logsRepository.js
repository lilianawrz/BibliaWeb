
class LogsRepository {
    constructor() {
        this.apiLogsUrl = apiLogsUrl;
    }

    async fetchLogsByMatricula(matricula) {
        try {
            const response = await fetch(`${this.apiLogsUrl}/logs/${matricula}`);
            if (!response.ok) {
                throw new Error(`Erro ao buscar logs: ${response.status}`);
            }
            const logs = await response.json();
            return logs;
        } catch (error) {
            console.error('Erro ao buscar logs:', error);
            return [];
        }
    }

    // Outras funções do repositório, como adicionar, atualizar, remover logs, etc., podem ser criadas aqui
}

export default LogsRepository;
