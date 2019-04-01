
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