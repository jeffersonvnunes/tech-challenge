import { SystemBaseException } from "../../../../common/exception/SystemBaseException";

export class ErrorToPagamentoRejeitado extends SystemBaseException {
    public readonly code = "sgr.erroPagamentoRejeitado";
    public readonly message = "Pagamento foi rejeitado pelo sistema externo";
    public readonly httpStatus = 500;
}