/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file
 */

/**
 * Collection ID: programs
 * Interface for Programs
 */
export interface Programs {
    _id: string;
    _createdDate?: Date;
    _updatedDate?: Date;
    programName?: string;
    shortDescription?: string;
    fullDescription?: string;
    programImage?: string;
    keyBenefits?: string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
    _id: string;
    _createdDate?: Date;
    _updatedDate?: Date;
    clientName?: string;
    testimonialText?: string;
    clientPhoto?: string;
    rating?: number;
    dateSubmitted?: Date | string;
    clientTitle?: string;
}
