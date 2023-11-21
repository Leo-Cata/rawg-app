export const requirementsFormatter = (text: string) => {
  // if there is text format it, else return not found
  if (text) {
    //first deletes the words Recommended and Minimum
    const deleteCategory = text.replace(/\s*(Recommended:|Minimum:)\s*/g, "");

    // then delete any text after 'Additional Notes:' and annoying EA note (mirror's edge)
    const deleteAdditionalNotes = deleteCategory.replace(
      /Additional Notes:|INTERNET CONNECTION, ONLINE AUTHENTICATION.*/,
      "",
    );

    //finally, format the text to have line breaks after the specified words, only if that word isn't the first word of the text
    const finalText = deleteAdditionalNotes.replace(
      /(?<!^)(Processor:|Graphics:|Storage:|Sound Card:|Memory:|Hard Drive:|CPU:|Video Card:|Hard Drive Space:|Sound:)/g,
      "<br/>$1",
    );

    return finalText;
  }

  return "Not Found";
};
