
export class Usuario {
  nome?: string;
  senha?: string;
}

export class JWTPayload {
  usr: number;
  name: string;
  funcional: string;
  exp: number;
  authorities: string[];
}

export class Cliente {
  codigoCliente: number;
  nome?: string;
  documento?: string;
  dataAlteracao?: string
  dataCadastro?: string;
  dataNascimento?: string;
  usuarioAlteracao?: string;
  usuarioCadastro?: string;
}

export class Veiculo {
  codigoVeiculo: number;
  modelo: string;
  marca: string;
  placa: string;
  preco: string;
  percentualDesconto: number;
  ano: string;
  motor: string;
  dataAlteracao?: string
  dataCadastro?: string;
  usuarioAlteracao?: string;
  usuarioCadastro?: string;
}

export class Venda {
  codigoVenda?: number;
  cliente?: Cliente;
  veiculo?: Veiculo;
  dataVenda?: string;
  precoVenda?: string;
}
