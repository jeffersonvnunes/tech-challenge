import { Optional } from "typescript-optional";
import { PagamentoDto } from "@pagamento/dtos";

export const IPagamentoRepositoryGateway: unique symbol = Symbol("IPagamentoRepositoryGateway");

export interface IPagamentoRepositoryGateway {
    criar(dto: PagamentoDto): Promise<number | undefined>;
    atualizarStatus(pagamento: PagamentoDto): Promise<void>;
    obterPorPedidoId(pedidoId: number): Promise<Optional<PagamentoDto[]>>;
    obterPorPedidoIdEIdentificador(pedidoId: number, identificador: string): Promise<Optional<PagamentoDto>>;
    obterPorIdentificador(identificador: string): Promise<Optional<PagamentoDto>>;
}