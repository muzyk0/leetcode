/**
 * Нужно написать функцию для разбивки текста на фрагменты.
 *
 * 1. Функция принимает на вход текст, написанный латиницей, где все слова
 * разделены только 1 пробелом. Текст содержит в себе только латинские буквы и
 * пробелы (без знаков препинания).
 * 2. Задача функции разбить текст на СМСки размером не больше 140 символов и
 * вернуть в результате массив получившихся строк.
 * 3. Так как СМСки платные важно разбить текст на минимальное количество
 * фрагментов.
 * 4. Слова нельзя разбивать посередине, то есть текст нужно разбить строго по
 * пробелам.
 * 5. Если весь текст не помещается в один фрагмент то каждый фрагмент должен
 * заканчиваться суффиксом ' k/n', где k - порядковый номер фрагмента, n -
 * количество фрагментов, на которые разбит текст. k <= n <= 9999.
 * 6. Суффикс учитывается при подсчете длины СМСки, то есть длина фрагмента
 * вместе с суффиксом должна быть меньше или равна 140 символам.
 * 7. Задача решаема, то есть в тексте не может быть настолько длинных слов, чтобы
 * одно слово с суффиксом не уместилось в одном СМС.
 *
 * Примеры:
 * Текст:
 * Lorem ipsum dolor sit amet consectetur adipiscing elit
 * Результат:
 * ['Lorem ipsum dolor sit amet consectetur adipiscing elit']
 * Текст:
 * Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at
 * magna pretium suscipit Nam commodo mauris felis ut suscipit velit efficitur eget
 * Sed sit amet posuere risus
 * Результат:
 * ['Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam eleifend odio at
 * magna pretium suscipit Nam commodo mauris felis ut 1/2', 'suscipit velit
 * efficitur eget Sed sit amet posuere risus 2/2']
 *
 * @param {string} text - Входной текст
 * @param {number} fragmentLength - Длина фрагмента
 * @param {number} suffixLength - Длина суффикса
 */
export const breakingTextIntoFragments = (
    text: string,
    fragmentLength = 140,
    suffixLength: number = 4
): string[] => {
    if (text.length <= fragmentLength) {
        return [text]
    }

    const result: string[] = [];

    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (
            result.length === 0 ||
            result[result.length - 1].length + words[i].length >=
            fragmentLength - suffixLength
        ) {
            result.push(words[i]);
            continue;
        }

        if (result[result.length - 1].length < fragmentLength - suffixLength) {
            result[result.length - 1] += ` ${words[i]}`;
        }
    }

    return result.map((message, index, array) => {
        return `${message} ${index + 1}/${array.length}`;
    });
};
