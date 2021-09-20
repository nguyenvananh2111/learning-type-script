// Generic for function
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const mergedObj = merge({ name: "anh" }, { age: 18 });
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe([1, 2, 3]));
console.log(countAndDescribe("hello world"));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}
console.log({ name: "Anh" }, "name");

/**
 * Gioi han kieu truyen vao cho class la number, string hoac boolean thoi
 */
class DataStorage<T extends number | string | boolean> {
    private data: T[] = [];
    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();

// PARTIAL
// set tất cả các properties của Object thành optional
// ví dụ dưới ta thấy có thể set từng phần mà ko cần làm 1 lần
// mặc dù cái interface CourseGoal không phải là optional
// nhưng khai báo Partial giúp nó trở thành optional thuộc tính hết
// tạm thời
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

// CHỗ này yêu cầu thằng todo phải đầy đủ hết 2 props
// nhưng chỉ cần update mỗi thằng description thôi
// nên khai báo Partial làm cho props của Todo thành optional hết
// ez game
const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
