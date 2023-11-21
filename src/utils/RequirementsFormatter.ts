export const requirementsFormatter = (text: string) => {
  // if there is text format it, else return not found
  if (text) {
    //first deletes the words Recommended and Minimum
    const deleteCategory = text.replace(/\s*(Recommended:|Minimum:)\s*/g, "");

    // then delete any text after 'Additional Notes:
    const deleteAdditionalNotes = deleteCategory.replace(
      /Additional Notes:.*/,
      "",
    );

    //finally, format the text to have line breaks after the specified words
    const finalText = deleteAdditionalNotes.replace(
      /(Processor:|Graphics:|Storage:|Sound Card:|Memory:)/g,
      "<br/>$1",
    );

    return finalText;
  }

  return "Not Found";
};
