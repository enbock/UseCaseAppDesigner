import Entity from './Entity';
import Gateway from './Gateway';

export interface Request {
    name: string;
}

export interface Response {
    useCase: Entity;
}

class AddResponse implements Response {
    readonly useCase: Entity;

    constructor(useCase: Entity) {
        this.useCase = useCase;
    }
}

export default class AddUseCase {
    private gateway: Gateway;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
    }

    addUseCase(request: Request): Response {
        const useCase = this.gateway.create();
        useCase.name = request.name;
        return new AddResponse(useCase);
    }
}

