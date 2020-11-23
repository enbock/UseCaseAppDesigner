import AddUseCase, {Request, Response} from './AddUseCase';
import Entity from './Entity';
import Gateway from './Gateway';

describe(AddUseCase, function () {
    it('should add a new case', function () {
        const useCaseCreate = jest.fn();
        const gateway: Gateway = {create: useCaseCreate};
        const add = new AddUseCase(gateway);
        const request: Request = {name: 'MyUseCase'};
        const entity: Entity = {name: ''};

        useCaseCreate.mockReturnValueOnce(entity);

        const response: Response = add.addUseCase(request);
        expect(response.useCase).toBe(entity);
        expect(response.useCase.name).toEqual('MyUseCase');
    });
});
