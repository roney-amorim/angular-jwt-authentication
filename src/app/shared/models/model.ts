
export class Usuario {
  nome ?: string;
  senha ?: string;
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
  nome ?: string;
  documento ?: string;
  dataAlteracao ?: string
  dataCadastro ?: string;
  dataNascimento ?: string;
  usuarioAlteracao ?: string;
  usuarioCadastro ?: string;
}
