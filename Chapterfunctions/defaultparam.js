function retry(testname, maxrt = 3, delay = 1000) {
    console.log(`retrying  ${testname}upto ${maxrt} times ${delay}`);
}

retry(" login");
retry(" regis", 5, 200);
