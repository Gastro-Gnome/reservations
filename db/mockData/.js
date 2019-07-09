//hardcoded models

let biz1 = {
    biz_id: 1,
    hoursByDay: {
        Mon: {
            open_at: "0700",
            close_at: "2000"
        },
        Tue: {
            open_at: "0700",
            close_at: "2000"
        },
        Wed: {
            open_at: "0700",
            close_at: "2000"
        },
        Thu: {
            open_at: "0700",
            close_at: "2000"
        },
        Fri: {
            open_at: "0700",
            close_at: "2000"
        },
        Sat: {
            open_at: "1000",
            close_at: "2000"
        },
        Sun: {
            open_at: "1000",
            close_at: "2000"
        }
    }
 }

 let biz2 = {
    biz_id: 2,
    hoursByDay: {
        Mon: {
            open_at: "0800",
            close_at: "1900"
        },
        Tue: {
            open_at: "0800",
            close_at: "1900"
        },
        Wed: {
            open_at: "0800",
            close_at: "1900"
        },
        Thu: {
            open_at: "0800",
            close_at: "1900"
        },
        Fri: {
            open_at: "0800",
            close_at: "1900"
        },
        Sat: {
            open_at: "1000",
            close_at: "1900"
        },
        Sun: {
            open_at: "1000",
            close_at: "1900"
        }
    }
 }

 let biz3 = {
    biz_id: 3,
    hoursByDay: {
        Mon: {
            open_at: "1700",
            close_at: "2400"
        },
        Tue: {
            open_at: "1700",
            close_at: "2400"
        },
        Wed: {
            open_at: "1700",
            close_at: "2400"
        },
        Thu: {
            open_at: "1700",
            close_at: "2400"
        },
        Fri: {
            open_at: "1700",
            close_at: "2400"
        },
        Sat: {
            open_at: "1700",
            close_at: "0200"
        },
        Sun: {
            open_at: "1700",
            close_at: "0200"
        }
    }
 }

 let sampleBizHoursItems = [biz1, biz2, biz3];

 module.exports = sampleBizHoursItems;