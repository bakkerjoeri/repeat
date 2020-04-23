import repeat from './../src/repeat';

describe('repeat', () => {
	test('calls the callback the correct amount of times', () => {
		const mockCallback = jest.fn(() => {});
		repeat(12, mockCallback);

		expect(mockCallback.mock.calls.length).toBe(12);
	});

	test('calls the callback with a 0-based iteration count as its first argument', () => {
		const mockCallback = jest.fn((i) => {});
		repeat(3, mockCallback);

		expect(mockCallback.mock.calls[0][0]).toBe(0);
		expect(mockCallback.mock.calls[1][0]).toBe(1);
		expect(mockCallback.mock.calls[2][0]).toBe(2);
	});
});
