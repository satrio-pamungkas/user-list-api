import { getPagination } from "../../src/utils/helper.util";

describe("Return error when pagination format as limit and offset breaking the rule", () => {
    test("Page input with negative value and size input with positive value", async () => {
        try {
            const { limit, offset } = await getPagination(-1,5);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });

    test("Page input with positive value and size input with negative value", async () => {
        try {
            const { limit, offset } = await getPagination(2,-5);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });

    test("Page input with negative value and size input with negative value", async () => {
        try {
            const { limit, offset } = await getPagination(-2,-5);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });

    test("Page input with zero value and size input with negative value", async () => {
        try {
            const { limit, offset } = await getPagination(0,-5);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });

    test("Page input with negative value and size input with zero value", async () => {
        try {
            const { limit, offset } = await getPagination(-2,0);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });

    test("Page input with zero value and size input with positive value", async () => {
        try {
            const { limit, offset } = await getPagination(0,5);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });

    test("Page input with positive value and size input with zero value", async () => {
        try {
            const { limit, offset } = await getPagination(2,0);
            console.log(limit);
            console.log(offset);

        } catch (error: any) {
            expect(error.message).toBe("Page and size cannot be negative value or zero");
        }
    });
})