/**
 * Thông thường function sẽ return void --> undefine
 * hoặc return gì đó
 *
 *
 * NEVER ở đây là không muốn return gì cả, ví dụ như
 * 1 function dùng để throw lỗi ra hoặc break 1 infinite loop
 * hoặc là function handle, chỉ chạy các thao tác thôi
 */

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}


