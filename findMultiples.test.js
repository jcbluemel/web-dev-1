describe("#findMultiples", function () {
  it("returns correct numbers", function () {
    expect(findMultiples([5, 6, 7, 5, 6, 5], 0)).toEqual([5, 6, 7]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 1)).toEqual([5, 6, 7]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 2)).toEqual([5, 6]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 3)).toEqual([5]);
    expect(findMultiples([5, 6, 7, 5, 6, 5], 4)).toEqual([]);
    expect(findMultiples(["hello", "world"], 2)).toEqual([]);
    expect(findMultiples(["1", "2", "3", "1"], 2)).toEqual([]);
    expect(findMultiples(["1", "2", "3", 1], 2)).toEqual([]);
    expect(findMultiples(["1", "2", "3", 1, 1], 2)).toEqual([1]);
    expect(findMultiples([NaN, NaN], 1)).toEqual([]);
    expect(findMultiples([1.5, 2.5, 1.5], 2)).toEqual([1.5]);
  });
});
