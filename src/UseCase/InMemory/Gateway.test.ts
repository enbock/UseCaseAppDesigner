import Gateway from './Gateway';
import InMemoryEntity from './Entity';
import Entity from '../Entity';
import * as uuid from 'uuid';

jest.mock('uuid', function () {
    return {v4: jest.fn()};
});

describe(Gateway, function () {
    function createEntity() {
        const gateway = new Gateway();
        return gateway.create();
    }

    it('should create a in memory entity', function () {
        const entity: Entity = createEntity();
        expect(entity).toBeInstanceOf(InMemoryEntity);
    });

    it('should generate uuid', function () {
        uuid.v4.mockReturnValueOnce('UUID');
        const entity: Entity = createEntity();
        expect(entity.id).toBe('UUID');
    });

    afterEach(function () {
        jest.resetAllMocks();
    });
});
