import {breakingTextIntoFragments} from "./breaking-text-into-fragments";

describe('Нужно написать функцию для разбивки текста на фрагменты.', function () {
    it('Text: Lorem ipsum dolor sit amet consectetur adipiscing elit', function () {
        const res = breakingTextIntoFragments('Lorem ipsum dolor sit amet consectetur adipiscing elit');

        expect(res).toStrictEqual(['Lorem ipsum dolor sit amet consectetur adipiscing elit']);
    });
    it('Text: Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit amet posuere risus', function () {
        const res = breakingTextIntoFragments(`Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget Sed sit amet posuere risus`);

        expect(res).toStrictEqual([`Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at magna pretium suscipit Nam commodo mauris felis ut 1/2`, `suscipit velit efficitur eget Sed sit amet posuere risus 2/2`]);
    });
});
